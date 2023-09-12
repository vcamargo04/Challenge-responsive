export default function Rodape() {
    return (
      <>
        <footer>
        <div className="footer">
            <div><img className="img-logo-porto" src="./logo-porto-footer.png"alt="Logo porto rodape" /></div>
          <p>&copy; Todos os direitos reservados - 2023</p>

          <div className="lista-footer">
            <ul>
              <li>
                <a href="https://www.facebook.com/porto/?locale=pt_BR" target="_blank"><img src="./facebook.png" alt="Icon do facebook" /></a>
              </li>
              <li>
                <a href="https://www.instagram.com/porto/" target="_blank"><img src="./instagram.png" alt="Icon do instagram" /></a>
              </li>
              <li>
                <a href="https://twitter.com/portoseguro?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><img src="./iconetwitter.png" alt="Icon do twitter" /></a>
              </li>
            </ul>
            
          </div>
        </div>
        </footer>
      </>
    );
  }
  