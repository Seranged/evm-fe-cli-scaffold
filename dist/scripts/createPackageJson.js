import fs from 'fs';
export function createPackageJson(projectName, directory, linter) {
    const scripts = {
        dev: 'next dev',
        build: 'next build',
        start: 'next start',
    };
    if (linter === 'Rome') {
        scripts.lint = 'pnpm rome check src --apply';
        scripts.format = 'pnpm rome format src --write';
    }
    else if (linter === 'ESLint and Prettier') {
        scripts.lint = 'next lint';
        scripts.format = 'prettier --write . --ignore-path .gitignore';
    }
    else if (linter === 'None') {
    }
    fs.writeFileSync(`${directory}/package.json`, JSON.stringify({
        name: projectName,
        author: 'Seranged',
        license: 'MIT',
        version: '0.1.0',
        scripts,
        dependencies: {
            '@types/node': '20.4.7',
            '@types/react': '18.2.18',
            '@types/react-dom': '18.2.7',
            autoprefixer: '10.4.14',
            encoding: '^0.1.13',
            next: '13.4.12',
            postcss: '8.4.27',
            react: '18.2.0',
            'react-dom': '18.2.0',
            tailwindcss: '3.3.3',
            typescript: '5.1.6',
            viem: '^1.5.3',
            wagmi: '^1.3.9',
        },
    }, null, 2));
}
