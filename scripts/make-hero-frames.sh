#!/usr/bin/env bash
# Turns the showroom walk-in video into numbered WebP frames for the homepage hero.
# Usage: bash scripts/make-hero-frames.sh walk.mp4 [frames]
# Then set WALK.frames in lib/home.ts to the count printed at the end, and WALK.doors to false.
set -euo pipefail
src="${1:?video file}"
n="${2:-80}"
dur=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$src")
fps=$(awk "BEGIN{print $n/$dur}")
rm -rf public/images/walk public/images/walk-sm
mkdir -p public/images/walk public/images/walk-sm
ffmpeg -loglevel error -i "$src" -vf "fps=$fps,scale=1920:-2" -c:v libwebp -quality 72 public/images/walk/%03d.webp
ffmpeg -loglevel error -i "$src" -vf "fps=$fps,scale=860:-2" -c:v libwebp -quality 70 public/images/walk-sm/%03d.webp
echo "frames: $(ls public/images/walk | wc -l)"
