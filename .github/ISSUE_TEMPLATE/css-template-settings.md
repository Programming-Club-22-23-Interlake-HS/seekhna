---
name: CSS template settings
about: CSS that is "usually" up to date that should cover basic webpage structure.
  You need to add edits if your adding elements.
title: CSS Template
labels: ''
assignees: destructiveasdf

---

@import url('https://fonts.cdnfonts.com/css/gotham');

body {
  color: #9D9DA9;
  font-family: 'Gotham', sans-serif;
  background-color: #09090D;
}

.left { text-align: left;
}
.navbar {
  overflow: hidden;
  background-color: #1A1A24;
  width: 100%;
  display: flex;
  justify-content: space-between;

}

.navbar a,form, input, button {
  float: left;
  font-size: 24px;
  color: #9D9DA9;
  text-align: center;
  padding: 20px;
  text-decoration: none;

}
.navbar form {
  color: #9D9DA9;
  background-color: #1A1A24;
}
.navbar button {
  background-color: #1A1A24;
  color: #9D9DA9;
  border-color: #9D9DA9;
}





.navbar a:hover,
.dropdown:hover .dropbtn {
  transition-duration: 0.5s;
  background-color: #2E2E3B;
}

.first {

  background-color: #121219;
  width: 100%;
  height: 600px;
  padding: 20px;
  text-align: center;
  color: white;
  font-size: 24px;
  font-family: "Gotham Thin", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.first h1 {
  font-size: 48px;
  margin: 0;
  padding: 50px;
  box-sizing: border-box;
  font-family: 'Gotham Thin', sans-serif;
  color: #CFCFF2;
}

.first p {
  font-size: 24px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Gotham Thin", sans-serif;
  color: #CFCFF2;
  border-color: #0D0D31;
}

.first a {
  text-decoration: none;
  color: #9D9DA9;
  font-size: 24px;
  font-family: "Gotham Thin", sans-serif;
  padding: 10px 20px;
  border: 1px solid #9D9DA9;
  border-radius: 5px;
  transition: 0.5s;
}

.first a:hover {
  background-color: #2E2E3B;
  color: #9D9DA9;
}
.d-flex p-3, .card {
  border-color: none;
}

.second {
  background-color: #1A1A24;
  width: 100%;
  height: 600px;
  padding: 20px;
  text-align: center;
  color: #9D9DA9;
  font-size: 24px;
  font-family: "Gotham Thin", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-color: none;

}

.second h1 {
  font-size: 48px;
  margin: 0;
  padding: 0;
  box-sizing: border
}
.card {
  background-color: #1A1A24;
}




::-webkit-scrollbar {
  width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #0D0D31;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: linear-gradient(0deg, #242450, #27275B);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.fourth {
  background-color: #1A1A24;
  width: 100%;
  height: 600px;
  padding: 20px;
  text-align: center;
  color: #9D9DA9;
  font-size: 24px;
  font-family: 'Gotham Thin', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: grid;
  border-color: white;
  flex-direction: column;
}






/* FOOTER STYLES */






*,
*:before,
*:after {
  box-sizing: border-box;
}

footer {
  font-size: 100%;
}

footer {
  font-family: acumin-pro, system-ui, sans-serif;
  margin: 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
  font-size: 14px;
  background-color: #f4f4f4;
  align-items: start;
  min-height: 40vh;
}

.footer {
  display: flex;
  flex-flow: row wrap;
  padding: 30px 30px 20px 30px;
  color: white;
  background-color: #0D0D31;
  border-top: 1px solid #e5e5e5;
}

.footer>* {
  flex: 1 100%;
}



.footer__logo {
  font-family: 'sans-serif', ;
  font-weight: 400;
  font-size: 1.5rem;
}

.footer__addr h2 {
  margin-top: 1.3em;
  font-size: 15px;
  font-weight: 400;
}

.nav__title {
  font-weight: 400;
  font-size: 15px;
}

.footer address {
  font-style: normal;
  color: #CFCFF2;
}

.footer__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  max-width: max-content;
  background-color: rgb(33, 33, 33, 0.07);
  border-radius: 100px;
  color: #CFCFF2;
  line-height: 0;
  margin: 0.6em 0;
  font-size: 1rem;
  padding: 0 1.3em;
}

.footer ul {
  list-style: none;
  padding-left: 0;
}

.footer li {
  line-height: 2em;
}

.footer a {
  text-decoration: none;
}

.footer__nav {
  display: flex;
  flex-flow: row wrap;
}

.footer__nav>* {
  flex: 1 50%;
  margin-right: 1.25em;
}

.nav__ul a {
  color: #CFCFF2;
}

.nav__ul--extra {
  column-count: 2;
  column-gap: 1.25em;
}

.legal {
  display: flex;
  flex-wrap: wrap;
  color: #CFCFF2;
}

.legal__links {
  display: flex;
  align-items: center;
}

.heart {
  color: #CFCFF2;
}

@media screen and (min-width: 24.375em) {
  .legal .legal__links {
    margin-left: auto;
  }
}

@media screen and (min-width: 40.375em) {
  .footer__nav>* {
    flex: 1;
  }

  .nav__item--extra {
    flex-grow: 2;
  }

  .footer__addr {
    flex: 1 0px;
  }

  .footer__nav {
    flex: 2 0px;
  }
}
