import Card from '../../components/Card/index'

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
    },
]

function Freelances() {
  return(
    <div>
      <h1>Freelances</h1>
      {freelanceProfiles.map((freelance, index) => (
        <Card
          key={`${freelance.name}-${index}`}
          label={freelance.jobTitle}
          title={freelance.name}
        />
      ))}
    </div>
  )
}

export default Freelances
