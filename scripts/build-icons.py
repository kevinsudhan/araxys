"""
Build a favicon that survives 16px.

The brand mark is three nested shapes: a hexagon ring, a transparent circle,
and a small star. At tab size those collapse into one another, and because the
circle is transparent rather than white, a dark browser chrome shows straight
through it — so a navy mark on a dark tab strip is three dark things stacked.

This keeps the hexagon silhouette (the recognisable part), drops the ring,
fills the plate solid, and enlarges the star so there is exactly one bright
shape doing the work.
"""

from PIL import Image
import numpy as np

SRC = "public/brand/araxys-mark-black.png"
SS = 4  # supersample factor for clean edges

NAVY = (20, 33, 61, 255)  # #14213D — same plate as the site
WHITE = (250, 250, 248, 255)  # --canvas, not pure white

# The star keeps the mark's own proportion. Enlarging it was only necessary
# while the ring was competing with it; with the plate solid it reads at 16px
# unchanged, and the icon stays true to the brand.
STAR_SCALE = 1.00

alpha = np.array(Image.open(SRC).convert("RGBA"))[..., 3] > 20
H, W = alpha.shape

# --- separate the two shapes -------------------------------------------------
# The star is a disconnected blob in the middle; the ring is everything else.
# Measured bounds of the star, with margin.
sx0, sx1, sy0, sy1 = 300, 730, 270, 750
star = np.zeros_like(alpha)
star[sy0:sy1, sx0:sx1] = alpha[sy0:sy1, sx0:sx1]
# anything in that window touching the ring's columns is not the star
ring = alpha.copy()
ring[sy0:sy1, sx0:sx1] = False

# --- solid hexagon -----------------------------------------------------------
# The hexagon is convex, so filling each row between its outermost opaque
# pixels reconstructs the plate exactly.
hexmask = np.zeros_like(alpha)
for y in range(H):
    xs = np.nonzero(ring[y])[0]
    if len(xs):
        hexmask[y, xs.min(): xs.max() + 1] = True

# --- enlarge the star about its own centre -----------------------------------
sys_, sxs_ = np.nonzero(star)
scy, scx = (sys_.min() + sys_.max()) / 2, (sxs_.min() + sxs_.max()) / 2
sh, sw = sys_.max() - sys_.min(), sxs_.max() - sxs_.min()

star_img = Image.fromarray((star * 255).astype(np.uint8)).crop(
    (sxs_.min(), sys_.min(), sxs_.max() + 1, sys_.max() + 1)
)
nw, nh = int(sw * STAR_SCALE), int(sh * STAR_SCALE)
star_big = star_img.resize((nw, nh), Image.LANCZOS)

star_canvas = Image.new("L", (W, H), 0)
star_canvas.paste(star_big, (int(scx - nw / 2), int(scy - nh / 2)))
star_arr = np.array(star_canvas) > 110

# --- compose -----------------------------------------------------------------
out = np.zeros((H, W, 4), dtype=np.uint8)
out[hexmask] = NAVY
out[hexmask & star_arr] = WHITE

img = Image.fromarray(out, "RGBA")

# crop to the mark and fit the frame edge to edge (no padding — padding is
# what wastes the few pixels a favicon has)
ys, xs = np.nonzero(hexmask)
img = img.crop((xs.min(), ys.min(), xs.max() + 1, ys.max() + 1))

for size, path in [(64, "app/icon.png"), (180, "app/apple-icon.png")]:
    cw, ch = img.size
    scale = size / max(cw, ch)
    tw, th = max(1, round(cw * scale)), max(1, round(ch * scale))
    big = img.resize((tw * SS, th * SS), Image.LANCZOS)
    frame = Image.new("RGBA", (size * SS, size * SS), (0, 0, 0, 0))
    frame.paste(big, ((size * SS - tw * SS) // 2, (size * SS - th * SS) // 2))
    if "apple" in path:
        # iOS composites on white and applies its own rounded mask, so the
        # plate must be opaque corner to corner rather than a hexagon.
        bg = Image.new("RGBA", frame.size, NAVY)
        bg.alpha_composite(frame)
        frame = bg
    frame.resize((size, size), Image.LANCZOS).save(path)
    print("wrote", path, size)
