import React from "react";

// Core
import styles from "./NotFound.module.css";
import BlackLogo from "../../assets/img/BlackLogo.svg";

// reactstrap
import { Container } from "reactstrap";

function NotFound() {
  return (
    <>
      <main className={styles.main}>
        <section className="row justify-content-center">
          <Container className="row justify-content-center">
            <div className={styles.nf__layout}>
              <img src={BlackLogo} classNam={styles.nf__logo} />
              <h1 className={styles.nf__tittle}>
                <span className={styles.nf__text}>¡</span> PÁGINA NO ENCONTRADA{" "}
                <span>!</span>
              </h1>
              <p>Lo sentimos, esta pagina no se encuentra dentro de DIG APP.</p>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}

export default NotFound;