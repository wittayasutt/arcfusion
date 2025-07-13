## How to run

### Using Docker

```bash
docker compose -f docker-compose.yml up --build

# The API will be available at http://localhost:8000
# The web will be available at http://localhost:5173
```

 ## Manual

```bash
cd ./web
npm run dev

# The web will be available at http://localhost:5173
```

 ## Storybook

```bash
cd ./web
npm run storybook

# The web will be available at http://localhost:6006
```

## Project structure

Start the project using Vite and use Shadcn to help build the components, then add the following folders."

### components

This project follows the Atomic Design methodology, focusing on creating reusable components only. All business logic and service integrations are separated into other layers to ensure ease of use and testing.

### features

This is used to store different features, keeping all related components, services, types, and hooks together in one place. This helps developers see the full picture of each feature and allows team members to work on separate features independently without interfering with one another

### hooks

Used for storing custom hooks.

### stores

This is for storing data from Zustand to be used for dark mode, with a focus on keeping it as simple as possible."

## Tradeoffs, Assumptions made

- Using Atomic Design methodology together with a feature-based architecture might be confusing for new developers at first, as it may not be immediately clear where each component should go. There can be a learning curve in the beginning, but in the long run, once developers become familiar with the structure, it makes the project easier to maintain, test, and reuse

- Atomic Design methodology can have a learning curve for those unfamiliar with it, especially when determining which layer each component should go into. However, when building a large number of reusable components—or if the goal is to develop a custom component library in the future—this methodology offers great advantages. Integrating Storybook further enhances visibility and understanding of the component structure.

