// 游戏常量
const GAME_CONFIG = {
    CELL_SIZE: 100,
    NUM_ROWS: 4,
    NUM_COLS: 9,
    HOUSE_X_LIMIT: 50
};

// 元素尺寸
const SPRITE_SIZES = {
    PEASHOOTER: {
        WIDTH: Math.floor(GAME_CONFIG.CELL_SIZE * 0.85),
        HEIGHT: Math.floor(GAME_CONFIG.CELL_SIZE * 0.85)
    },
    SUNFLOWER: {
        WIDTH: Math.floor(GAME_CONFIG.CELL_SIZE * 0.85),
        HEIGHT: Math.floor(GAME_CONFIG.CELL_SIZE * 0.85)
    },
    ZOMBIE: {
        WIDTH: Math.floor(GAME_CONFIG.CELL_SIZE * 0.7),
        HEIGHT: Math.floor(GAME_CONFIG.CELL_SIZE * 0.95)
    },
    SUN: Math.floor(GAME_CONFIG.CELL_SIZE * 0.7)
};

// 资源路径
const ASSET_PATHS = {
    IMAGES: {
        sun: 'assets/images/gameImg/sun.png',
        zombie: 'assets/images/gameImg/zombie.png',
        peashooter: 'assets/images/gameImg/peashooter.png',
        sunflower: 'assets/images/gameImg/sunflower.png',
        startScreenBg: 'assets/images/gameImg/start-screen-bg.png',
        gameBg: 'assets/images/gameImg/game-bg.png'
    },
    AUDIO: {
        // 待添加音效
    }
};

// 占位图配置
const PLACEHOLDER_CONFIG = {
    sun: `https://placehold.co/${SPRITE_SIZES.SUN}x${SPRITE_SIZES.SUN}/FFD700/000000?text=S`,
    zombie: `https://placehold.co/${SPRITE_SIZES.ZOMBIE.WIDTH}x${SPRITE_SIZES.ZOMBIE.HEIGHT}/6B4628/FFFFFF?text=Z`,
    peashooter: `https://placehold.co/${SPRITE_SIZES.PEASHOOTER.WIDTH}x${SPRITE_SIZES.PEASHOOTER.HEIGHT}/34D399/000000?text=P`,
    sunflower: `https://placehold.co/${SPRITE_SIZES.SUNFLOWER.WIDTH}x${SPRITE_SIZES.SUNFLOWER.HEIGHT}/FBBF24/000000?text=SF`,
    startScreenBg: 'https://placehold.co/1200x800/2c5282/ffffff?text=Plants+vs+Zombies',
    gameBg: 'https://placehold.co/1200x800/556b2f/ffffff?text=Lawn'
};
