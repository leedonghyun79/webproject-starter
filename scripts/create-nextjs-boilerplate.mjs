#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');
const targetPath = process.argv[2] || path.join(process.cwd(), 'new-nextjs-project');

// 생성할 폴더 구조
const folderStructure = [
  'src/app/(common)/components',
  'src/app/(common)/config',
  'src/app/(common)/constants',
  'src/app/(common)/utils',
  'src/app/(domains)/(auth)',
  'src/app/(domains)/(dashboard)',
  'src/app/(domains)/(settings)',
  'src/components',
  'src/config',
  'src/constants',
  'src/lib',
  'src/store',
  'src/types',
  'src/utils',
  'public',
];

// 복사할 파일들 (client에서)
const filesToCopy = [
  'package.json',
  'next.config.ts',
  'tsconfig.json',
  'tailwind.config.ts',
  'postcss.config.mjs',
  'eslint.config.mjs',
];

const appFiles = [
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/app/globals.css',
  'src/app/favicon.ico',
];

function createDirectories(basePath) {
  folderStructure.forEach((dir) => {
    const fullPath = path.join(basePath, dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
      console.log(`✅ 생성: ${dir}`);
    }
  });
}

function copyFiles(basePath) {
  const clientPath = path.join(projectRoot, 'client');

  // 설정 파일 복사
  filesToCopy.forEach((file) => {
    const src = path.join(clientPath, file);
    const dest = path.join(basePath, file);

    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      console.log(`📄 복사: ${file}`);
    }
  });

  // app 파일 복사
  appFiles.forEach((file) => {
    const src = path.join(clientPath, file);
    const dest = path.join(basePath, file);

    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      console.log(`📄 복사: ${file}`);
    }
  });
}

function createGitignore(basePath) {
  const gitignorePath = path.join(basePath, '.gitignore');
  if (!fs.existsSync(gitignorePath)) {
    const content = `# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# vercel
.vercel

# IDE
.vscode/
.idea/
*.swp
*.swo
`;
    fs.writeFileSync(gitignorePath, content);
    console.log(`📄 생성: .gitignore`);
  }
}

function installDependencies(basePath) {
  console.log(`📦 npm install 실행 중...\n`);
  try {
    execSync('npm install', { cwd: basePath, stdio: 'inherit' });
    console.log(`\n✅ 의존성 설치 완료!\n`);
  } catch (error) {
    console.error(`❌ npm install 실패: ${error.message}`);
    console.log(`수동으로 실행해주세요: cd ${basePath} && npm install`);
  }
}

function main() {
  console.log(`\n🚀 NextJS Boilerplate 생성 중...\n`);

  // 대상 폴더 생성
  if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath, { recursive: true });
    console.log(`📁 프로젝트 폴더 생성: ${targetPath}\n`);
  } else {
    console.log(`📁 대상 폴더: ${targetPath}\n`);
  }

  try {
    // 폴더 구조 생성
    createDirectories(targetPath);
    console.log();

    // 파일 복사
    copyFiles(targetPath);
    console.log();

    // .gitignore 생성
    createGitignore(targetPath);
    console.log();

    // npm install 자동 실행
    installDependencies(targetPath);

    console.log(`✨ NextJS Boilerplate 준비 완료!\n`);
    console.log(`다음 단계:`);
    console.log(`  cd ${path.relative(process.cwd(), targetPath)}`);
    console.log(`  npm run dev\n`);
  } catch (error) {
    console.error(`❌ 오류: ${error.message}`);
    process.exit(1);
  }
}

main();
