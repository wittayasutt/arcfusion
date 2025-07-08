import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			'@': path.resolve(process.cwd(), 'src'),
			'@components': path.resolve(process.cwd(), 'src/components'),
			'@atoms': path.resolve(process.cwd(), 'src/components/atoms'),
			'@molecules': path.resolve(process.cwd(), 'src/components/molecules'),
			'@organisms': path.resolve(process.cwd(), 'src/components/organisms'),
			'@templates': path.resolve(process.cwd(), 'src/components/templates'),
			'@features': path.resolve(process.cwd(), 'src/features'),
			'@pages': path.resolve(process.cwd(), 'src/pages'),
			'@stores': path.resolve(process.cwd(), 'src/stores'),
			'@assets': path.resolve(process.cwd(), 'src/assets'),
		},
	},
});
