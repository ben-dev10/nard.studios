import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from 'next-themes'

interface CustomThemeProviderProps extends ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children, ...props }: CustomThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}