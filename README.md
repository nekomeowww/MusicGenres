<h1 align="center">MusicGenres</h1>
<p align="center">The JSON list for all the general music genres</p>
<p align="center">
    <img src="https://github.com/nekomeowww/MusicGenres/workflows/Node%20Test/badge.svg" />
    <img src="https://github.com/nekomeowww/MusicGenres/workflows/Node%20Build/badge.svg" />
</p>

## 安装 Installation

### CDN

```HTML
<script src="ttps://unpkg.com/musicgenres-json@latest/dist/index.js"></script>
```

### NPM
```bash
npm install musicgenres-json --save

# Or use Yarn

yarn add musicgenres-json
```

## 引入和使用 Import and Usage

### Browser

```HTML
<script>
    const genres = new MusicGenres()
    console.log(genres.get())
</script>
```

### ES6

```Javascript
import MusicGenres from 'musicgenres-json'
const genres = new MusicGenres()

console.log(genres.get())
```

## API Reference

### MusicGenres
**Type**: Class
**Properties**:
- genres
**Method**:
- get()

### genres
**Type**: Array
**Description**: the value of genres

### get()
**Type**: Function
**Description**: return genres as method