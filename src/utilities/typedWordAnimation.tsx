const typedWordAnimation = (inputString: string, className: string) => {
  const jsxString = inputString.split('').map((char, index) => {
    if (char === ' ') {
      return <span key={index}>&nbsp;</span>;
    }
    return <span key={index}>{char}</span>;
  });

  return (
    <p className={className}>
      {jsxString}
    </p>
  );
}

export default typedWordAnimation;