# ggbgfx

> Library for converting images into the Nintendo Game Boy's graphics format.

Use this library to build an asset pipeline for your game's graphics.

## GBDK.js Project

Visit the [gbdkjs.com](https://www.gbdkjs.com) website for more information.

[GBDK.js Documentation](https://www.gbdkjs.com/docs/)

## CLI

See also `ggbgfx-cli` for a command line interface.

## Install

```
npm install --save ggbgfx
```

## API

`const ggbgfx = require("ggbgfx")`

`imageToTilesString(filename)` Convert PNG image to Game Boy tile data.

`imageToSpriteString(filename)` Convert PNG image to Game Boy sprite data.

`imagesToTilesetImage([filenames], outfile)` Convert PNG images to a PNG tileset containing only the unique tiles from the input images.

`imageAndTilesetToTilemap(filename, tileset, offset)` Convert an input PNG image and tileset output tilemap data. Optional `offset` tilemap numbers by n tiles. Needed if not loading tilemap at initial memory location.
