-- List the following details of each employee: employee number, last name, first name, gender, and salary.
select  em.emp_no, em.last_name, em.first_name, em.gender, sa.salary
from employees as em
join salaries as sa
on (em.emp_no = sa.emp_no);


-- List employees who were hired in 1986.
select first_name, last_name from employees
where hire_date between '1986-01-01' and '1986-12-31';


-- List the manager of each department with the following information: department number, department name, the manager's employee number, last name, first name, and start and end employment dates.
select  dm.dept_no, dep.dept_name, dm.emp_no, em.last_name, em.first_name, dm.from_date, dm.to_date
from dept_manager as dm
join departments as dep
on (dm.dept_no = dep.dept_no)
join employees as em
on (dm.emp_no = em.emp_no);


-- List the department of each employee with the following information: employee number, last name, first name, and department name.
select  em.emp_no, em.last_name, em.first_name, dep.dept_name
from employees as em
join dept_emp as de
on (em.emp_no = de.emp_no)
join departments as dep
on (de.dept_no = dep.dept_no)


-- List all employees whose first name is "Hercules" and last names begin with "B."
select first_name, last_name from employees
where first_name = 'Hercules' and last_name like 'B%';


-- List all employees in the Sales department, including their employee number, last name, first name, and department name.
select de.emp_no, em.last_name, em.first_name, dep.dept_name
from dept_emp as de
join employees as em
on de.emp_no = em.emp_no
join departments as dep
on de.dept_no = dep.dept_no
where dep.dept_name = 'Sales';


-- List all employees in the Sales and Development departments, including their employee number, last name, first name, and department name.
select de.emp_no, em.last_name, em.first_name, dep.dept_name
from dept_emp as de
join employees as em
on de.emp_no = em.emp_no
join departments as dep
on de.dept_no = dep.dept_no
where dep.dept_name IN ('Sales', 'Development');


-- In descending order, list the frequency count of employee last names, i.e., how many employees share each last name.
select last_name, count(last_name) from employees
group by last_name
order by count(last_name) desc;

