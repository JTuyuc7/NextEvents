const { default: MainHeader } = require("./main-header")


const Layout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  )
}

export default Layout