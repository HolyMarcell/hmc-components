import React from 'react';

interface DummyProps {
  foo: string;
}

interface ReactStyleProps {
  className?: string;
  style?: React.CSSProperties;
}

interface CardTitleProps extends ReactStyleProps {
  topRight?: React.ReactNode;
}

interface CardActionsProps extends ReactStyleProps {
}

interface CardProps extends ReactStyleProps {
}

interface CardBodyProps extends ReactStyleProps {
}

interface Tab {
  title: React.ReactNode;
  body?: React.ReactNode;
}

interface TabbedCardProps extends ReactStyleProps {
  tabs: Tab[];
  topRight?: React.ReactNode;
}

export { CardActionsProps, CardBodyProps, CardProps, CardTitleProps, DummyProps, ReactStyleProps, Tab, TabbedCardProps };
