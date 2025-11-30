const rows = 10;
const cols = 20;
const grid = document.getElementById("imageGrid");
const tiles = [];

for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");

    tile.style.width = 100 / cols + "%";
    tile.style.height = 100 / rows + "%";
    tile.style.backgroundPosition = `${(c / (cols - 1)) * 100}% ${(r / (rows - 1)) * 100}%`;

    grid.appendChild(tile);
    tiles.push(tile);
  }
}

const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });

// Break-apart animation
tl.to(tiles, {
  duration: 1.6,
  x: () => gsap.utils.random(-300, 300),
  y: () => gsap.utils.random(-300, 300),
  rotate: () => gsap.utils.random(-220, 220),
  opacity: 0,
  stagger: {
    each: 0.015,
    from: "center",
  },
  ease: "back.out(2)",
});

// Reassemble animation
tl.to(tiles, {
  duration: 1.6,
  x: 0,
  y: 0,
  rotate: 0,
  opacity: 1,
  stagger: {
    each: 0.015,
    from: "edges",
  },
  ease: "power3.out",
});
