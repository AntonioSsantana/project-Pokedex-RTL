# Projeto Pokédex RTL (React Testing Library)

Este é um projeto no qual fui responsável pelo desenvolvimento dos testes em RTL (React Testing Library) na pasta `/tests`. O RTL é uma biblioteca de testes para React que permite realizar testes de componentes de forma simples e eficiente.

## Bibliotecas e Frameworks Utilizados

- **@testing-library/jest-dom**: Versão 5.16.5
- **@testing-library/react**: Versão 13.3.0
- **@testing-library/user-event**: Versão 13.5.0
- **prop-types**: Versão 15.8.1
- **react**: Versão 18.2.0
- **react-dom**: Versão 18.2.0
- **react-router-dom**: Versão 5.3.3
- **react-scripts**: Versão 5.0.1

## Scripts

O projeto possui os seguintes scripts:

- **start**: Inicia o aplicativo em ambiente de desenvolvimento.
- **build**: Realiza o build do aplicativo para produção.
- **test**: Executa os testes utilizando o Jest.
- **test-coverage**: Executa os testes e gera um relatório de cobertura de código.
- **eject**: Remove a dependência do react-scripts e permite configurar o projeto manualmente.
- **lint:styles**: Executa a verificação de linting nos arquivos CSS utilizando o Stylelint.
- **lint**: Executa a verificação de linting nos arquivos JavaScript e JSX utilizando o ESLint.

## Configuração do ESLint

O projeto utiliza a configuração "react-app" do ESLint, que é uma configuração padrão recomendada para projetos React.

## Browserslist

O projeto possui a seguinte configuração do Browserslist:

- **production**:
  - ">0.2%"
  - "not dead"
  - "not op_mini all"
- **development**:
  - "last 1 chrome version"
  - "last 1 firefox version"
  - "last 1 safari version"

## Configuração do Jest

O Jest foi configurado para coletar a cobertura de código de todos os arquivos com extensões .js e .jsx, excluindo os arquivos src/index.js e src/serviceWorker.js.

## Dependências de Desenvolvimento

Além das dependências mencionadas acima, o projeto possui as seguintes dependências de desenvolvimento:

- **@stryker-mutator/core**: Versão 6.1.2
- **@stryker-mutator/jest-runner**: Versão 6.1.2
- **eslint-config-trybe-frontend**: Versão 1.3.0

Essas dependências são utilizadas para executar testes de mutação utilizando o Stryker Mutator, bem como para configurar as regras de linting específicas da Trybe.