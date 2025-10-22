import type { Config } from "tailwindcss";

export default {
  // Enables dark mode using the 'class' strategy, relying on the '.dark' class defined in CSS
  darkMode: ["class"],

  // List of files Tailwind should scan for utility classes
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  // No prefix for utility classes (e.g., uses 'p-4' instead of 'custom-p-4')
  prefix: "",

  theme: {
    // Defines the responsive container settings
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Maps CSS HSL variables to Tailwind color classes
      colors: {
        // Core structural colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))", // Used for focus rings (accessibility)
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))", // Main text color

        // Primary brand color palette
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        // Secondary, less emphasized color palette
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        // Destructive/Alert color palette
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },

        // Subtle/Muted colors (e.g., placeholders, light backgrounds)
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        // Accent/Highlight color palette
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },

        // Popover/Dropdown component colors
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },

        // Card component colors
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // Custom Sidebar component colors (complex palette)
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },

      // Maps the '--radius' CSS variable to standard border-radius tokens
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      // Keyframe definitions for custom animations
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },

      // Animation mappings
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      // Maps the custom gradient variable to a utility class
      backgroundImage: {
        "hero-gradient": "var(--hero-gradient)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
