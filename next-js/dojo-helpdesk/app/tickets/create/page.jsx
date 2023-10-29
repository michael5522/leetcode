import CreateForm from './CreateForm'

export default async function CreateTicket() {
  return (
    <main>
      <h2 className="text-center text-primary">Open a New Ticket</h2>
      <CreateForm />
    </main>
  )
}
