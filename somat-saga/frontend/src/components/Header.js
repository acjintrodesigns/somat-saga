import { getUserInfo } from '../localStorage'
import { parseRequestUrl } from '../utils'

const Header = {
  render: () => {
    const { name, isAdmin } = getUserInfo()
    const { value } = parseRequestUrl()
    return ` 
  <div class="brand">
   <button id="aside-open-button">
      &#9776;
    </button>
    <a href="/#/"><img src="images/Logo.png"></a>
  </div>

<div class="search">
  <form class="search-form"  id="search-form">
    <input type="text" name="q" id="q" value="${value || ''}" /> 
    <button type="submit"><i class="fa fa-search"></i></button>
  </form>        
  </div>
  <div>
  <ul class="nav-links">
    <li class="nav-link">    ${
      isAdmin ? `<a href="/#/dashboard">Dashboard</a>` : ''
    }</li>
  <li class="nav-link">  ${
    name
      ? `<a href="/#/profile">${name}</a>`
      : `<a href="/#/signin">Sign-In</a>`
  }</li>
  <li class="nav-link"><a href="/#/cart">Cart</a></li>
  </ul>

  </div>`
  },
  after_render: () => {
    document
      .getElementById('search-form')
      .addEventListener('submit', async (e) => {
        e.preventDefault()
        const searchKeyword = document.getElementById('q').value
        document.location.hash = `/?q=${searchKeyword}`
      })

    document
      .getElementById('aside-open-button')
      .addEventListener('click', async () => {
        document.getElementById('aside-container').classList.add('open')
      })
  },
}
export default Header
