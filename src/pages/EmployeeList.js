import styles from "./styles/employeelist.module.css";
import { useSelector } from "react-redux";
const Row = (props) => (
  <div>
    <p>{props.data}</p>
  </div>
);

const EmployeeList = () => {
  const data = useSelector((state) => state.listReducer);
  const employees = data.user;
  console.log(employees);
  return (
    <main className={styles.main}>
      <div className={styles.table}>
        <div className={styles.row}>
          <p className={styles.head}>s.no</p>
          {employees.map((item) => {
            return <Row data={item.id} key={item.id} />;
          })}
        </div>
        <div className={styles.row}>
          <p className={styles.head}>Name</p>
          {employees.map((item) => {
            return <Row data={item.name} key={item.id} />;
          })}
        </div>
        <div className={styles.row}>
          <p className={styles.head}>age</p>
          {employees.map((item) => {
            return <Row data={item.age} key={item.id} />;
          })}
        </div>
        <div className={styles.row}>
          <p className={styles.head}>gender</p>
          {employees.map((item) => {
            return <Row data={item.gender} key={item.id} />;
          })}
        </div>
        <div className={styles.row}>
          <p className={styles.head}>email</p>
          {employees.map((item) => {
            return <Row data={item.email} key={item.id} />;
          })}
        </div>
        <div className={styles.row}>
          <p className={styles.head}>number</p>
          {employees.map((item) => {
            return <Row data={item.phoneNo} key={item.id} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default EmployeeList;
