'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface NavigationContextType {
  isMobileMenuOpen: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleMobileMenu: () => void;
  activeSection: string;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

interface NavigationProviderProps {
  children: React.ReactNode;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Cerrar menu móvil cuando cambie la ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Bloquear scroll cuando el menu móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Determinar sección activa basada en pathname
  const getActiveSection = (pathname: string): string => {
    if (pathname === '/') return 'inicio';
    if (pathname.startsWith('/about')) return 'sobre-mi';
    if (pathname.startsWith('/education')) return 'formacion';
    if (pathname.startsWith('/skills')) return 'habilidades';
    if (pathname.startsWith('/contact')) return 'contacto';
    return 'inicio';
  };

  const activeSection = getActiveSection(pathname);

  const value: NavigationContextType = {
    isMobileMenuOpen,
    openMobileMenu,
    closeMobileMenu,
    toggleMobileMenu,
    activeSection,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

// Tipos y constantes para navegación
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export const navigationItems: NavigationItem[] = [
  {
    id: 'inicio',
    label: 'Inicio',
    href: '/',
  },
  {
    id: 'sobre-mi',
    label: 'Sobre Mí',
    href: '/about',
  },
  {
    id: 'formacion',
    label: 'Formación',
    href: '/education',
  },
  {
    id: 'habilidades',
    label: 'Habilidades',
    href: '/skills',
  },
  {
    id: 'contacto',
    label: 'Contacto',
    href: '/contact',
  },
];