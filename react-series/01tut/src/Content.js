const Content = () => {

  const handleNameChange = () => {
    const names = ['michael', 'henry', 'hana'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  return (
    <main>
      Hello {handleNameChange()}!
    </main>
  )
}

export default Content;
