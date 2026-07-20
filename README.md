# Consultoria de Calistenia e Musculação

Landing page estática (HTML + CSS + JS puro) para consultoria de calistenia, com avaliação técnica baseada em escala de progressão.

## Estrutura

```
site/
├── index.html
├── css/
│   ├── general.css        → tokens, reset, tipografia, componentes base
│   ├── header.css
│   ├── hero.css
│   ├── sobre.css
│   ├── bastidores.css
│   ├── servicos.css
│   ├── depoimentos.css
│   ├── contato.css
│   └── footer.css
├── js/
│   ├── menu.js             → menu mobile
│   ├── viacep.js            → integração com a API ViaCEP
│   └── form.js              → validação e mensagem de agradecimento
└── assets/
    ├── img/
    │   ├── photos/          → fotos reais (Lavoyer Calistenia)
    │   ├── favicon.svg
    └── icons/               → ícones
```

## Branches deste repositório

- **main** — versão estável, pronta para publicação.
- **develop** — branch de desenvolvimento, para novas seções e ajustes antes de ir para `main`.
