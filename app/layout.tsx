import './globals.css'

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="jp">
      <head />
      <body>{children}</body>
    </html>
  );
};
