import s from './HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <h1>
        Welcome to <span className={s.titlePart}>Phonebook</span>{' '}
      </h1>
    </>
  );
}
