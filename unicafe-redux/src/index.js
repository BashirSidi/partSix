import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const Statistics = (props) => {
	let Good = props.Good;
	let Neutral = props.Neutral;
	let Bad = props.Bad;
	let all = Good + Neutral + Bad;
	return (
		<div>
			<h1>Statistics</h1>
			<Statistic text="Good" value={Good} />
			<Statistic text="Neutral" value={Neutral} />
			<Statistic text="Bad" value={Bad} />
			<Statistic text="All" value={all} />
			<Statistic text="Average" value={all / 3} />
		</div>
	);
};

const Statistic = (props) => {
	return (
		<div>
			<table>
				<thead>
					<tr>
						<td rowSpan={2} />
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{props.text}</td>
						<td>{props.value}</td>
					</tr>
				</tbody>
			</table>
			<br />
		</div>
	);
};

const App = () => {

  const good = () => {
    store.dispatch({type: 'GOOD'}) 
  }

  const reset = () => {
    store.dispatch({type: 'ZERO'})
  }

  const bad = () => {
    store.dispatch({type: 'BAD'})
  }

  const ok = () => {
    store.dispatch({type: 'OK'})
  }

  let all = store.getState().good +
            store.getState().ok +
            store.getState().bad;

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={good}>good</button> 
      <button onClick={ok}>neutral</button> 
      <button onClick={bad}>bad</button>
      <button onClick={reset}>reset stats</button><p/>

      {all <= 0 ? 'No feedback' : 
      <Statistics 
        Good={store.getState().good} 
        Neutral={store.getState().ok} 
        Bad={store.getState().bad} 
      />
      }
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
