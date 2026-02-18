export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="p-4">
      <p>Made with ❤️ © {year}</p>
    </footer>
  )
}
