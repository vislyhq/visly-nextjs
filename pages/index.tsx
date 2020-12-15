import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import { Welcome } from "../components/visly/StarterApp";
import { heart, moon, bell, folder, file } from '../components/visly/icons'

const hints = [{
  text: "Join the Slack community! The Visly team is always online to help.",
  link: "https://join.slack.com/t/vislycommunity/shared_invite/enQtOTMxODg4NzA4MDIwLWQ2OGUwOTczYmMyMWEwZjVhYjVmN2JjMzZmYzZmNzBjODI1NzVkZGMzNjIwMzM5MDA4YjEwNmQwNzRjNjM0ZDg",
  icon: moon
},
{
  text: "Follow Visly on Twitter for the latest news.",
  link: "https://twitter.com/vislyhq",
  icon: bell
},
{
  text: "Check out our public roadmap to see what we're building next.",
  link: "https://visly.app/roadmap",
  icon: heart
},
{
  text: "Need a blank canvas? Remove StarterApp from Visly to start from scratch.",
  link: "https://services.visly.app/login/electron",
  icon: folder
},
{
  text: "Need more help? Check out our docs for tutorials and techniques.",
  link: "https://visly.app/docs/getting-started",
  icon: file
}
]

export default function Home() {
  const [currentHint, setCurrentHint] = useState(0);
  const hint = hints[currentHint]

  return (
    <div className={styles.container}>
      <Welcome
        Badge={<Welcome.Badge kind="warning" />}
        Button={
          <Welcome.Button
            onClick={() => setCurrentHint((currentHint + 1) % (hints.length))}
          />
        }
      >
        <a href={hint.link} target="_blank" rel="noreferrer">
          <Welcome.Hint
            text={hint.text}
            icon={hint.icon}
          />
        </a>
      </Welcome>
    </div>
  );
}
