import Example from 'shared/assets/example.svg';
import cls from './styles/app.module.scss';

const App = () => {
	return (
		<div>
			<Example />
			<div className={cls.app}>desktop version</div>
		</div>
	);
};

export default App;
