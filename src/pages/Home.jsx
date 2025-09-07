import React from 'react'
import Header from '../components/heading/header'
import Body from '../components/body/body'

const Home = () => {
    return (
        <div>
            <Header />

            <Body cards={[
                {
                    title: 'TaskTracker', description: 'Лендинг з адаптивною версткою',
                    link: 'https://github.com/MaXDmitR/Tasktracker',
                    images: ['images/Tasktracker/tacktrecker3.jpg', 'images/Tasktracker/tacktrecker2.jpg', 'images/Tasktracker/tacktrecker1.jpg']
                },
                {
                    title: 'Electricity', description: 'Full-stack сайт для обчислення прибутку від сонячної електростанції',
                    link: 'https://github.com/MaXDmitR/electricity-accounting',
                    images: ['images/Electricity/electricity6.jpg', 'images/Electricity/electricity7.jpg', 'images/Electricity/electricity8.jpg', 'images/Electricity/electricity4.jpg']
                },
                
            ]} />
        </div>
    )
}

export default Home
