export function usehotWord() {
    const hotWord = useState("hotWord", () => []);
    return {
        hotWord
    };
  }