import styles from "./header.module.css"

type HeaderProps = {
    query: string,
    setQuery: (query: string) => void;
}

export const Header = ({query, setQuery}: HeaderProps) => {
  return (
    <header className={styles.header}>
        <input
        className={styles.input} 
        placeholder="Search a Pokemon" 
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}/>
    </header>
  )
}
