import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@atoms': path.resolve(__dirname, 'src/components/atoms'),
			'@molecules': path.resolve(__dirname, 'src/components/molecules'),
			'@organisms': path.resolve(__dirname, 'src/components/organisms'),
			'@templates': path.resolve(__dirname, 'src/components/templates'),
			'@ui': path.resolve(__dirname, 'src/components/ui'),
			'@features': path.resolve(__dirname, 'src/features'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@stores': path.resolve(__dirname, 'src/stores'),
			'@types': path.resolve(__dirname, 'src/types'),
		},
	},
});
