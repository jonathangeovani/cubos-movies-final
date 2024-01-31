<template>
  <footer>
    <p>
      2024 &copy; Todos os direitos reservados a <strong>Cubos Movies</strong>
    </p>
  </footer>
</template>

<style scoped lang="scss">
footer {
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  line-height: 20px;
  color: var(--mauve-11);
  background-color: var(--mauve-1-a1);
  border-top: 1px solid var(--mauve-a6);

  strong {
    font-weight: 600;
  }
}

@media only screen and (max-width: 768px) {
  footer {
    padding: 20px;
    font-weight: 700;

    strong {
      font-weight: 700;
    }
  }
}
</style>
