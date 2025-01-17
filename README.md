# Laravel & HeroUI Template

This is a template for creating applications using Laravel 11 and HeroUI (v2).

## Technologies Used

-   [Laravel 11](https://laravel.com/)
-   [HeroUI v2](https://www.heroui.com/)
-   [PHP v8.2](https://www.php.net/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Tailwind Variants](https://tailwind-variants.org)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Framer Motion](https://www.framer.com/motion/)

## How to Use

### Use the template with create-Laravel

To create a new project based on this template using `create-laravel`, run the following command:

```bash
npx create-next-app -e https://github.com/frontio-ai/laravel-template.git
```

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@heroui/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.
