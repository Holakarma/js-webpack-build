import Example from "shared/assets/example.svg";
import cls from './styles/app.module.scss'

const App = () => {

    if (__PLATFORM__ === 'desktop') { // DefinePlugin(); при сборке mobile эта часть кода выпилится из билда
        return <div>
            <Example/>
            <div className={cls.app}>desktop version</div>
        </div>
    }

    if (__PLATFORM__ === 'mobile') {
        return <div>mobile version</div>
    }
};

export default App;