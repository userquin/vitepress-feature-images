import { defineConfig } from 'vitepress';
import FeatureImagePlugin from './plugins/FeatureImagePlugin.js';

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
    vite: {
        plugins: [FeatureImagePlugin()],
    },
    lang: 'en-US',
    title: 'VitePress',
    description: 'Vite & Vue powered static site generator.',

    themeConfig: {
        nav: [
            { text: 'Example', link: '/example' },

            // {
            //   text: 'Dropdown Menu',
            //   items: [
            //     { text: 'Item A', link: '/item-1' },
            //     { text: 'Item B', link: '/item-2' },
            //     { text: 'Item C', link: '/item-3' },
            //   ],
            // },

            // ...
        ],

        sidebar: [
            {
                // text: 'Guide',
                items: [
                    { text: 'Example', link: '/example' },
                    // ...
                ],
            },
        ],
    },
});
