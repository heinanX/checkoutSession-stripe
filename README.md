# Checkout Session

Betaltjänst med integration emot Stripe

*Uppgiftsbeskrivning: I den här inlämningen skall ni skapa en webbshop där det går att lägga en order och genomföra en betalning med integration med Stripe. Man skall kunna registrera sig och logga in. Användaren skall skapas som kund i Stripe samt att användarnamn/email och krypterat lösenord skall sparas i en JSON-fil på servern. Hantera inloggning med hjälp av cookies. Alla produkter hanteras genom Stripe.*

*För väl godkänt skall ni implementera en validering av betalningen. Vid godkänd validering skall ordern sparas i en JSON-fil på servern. Backend: Node/ExpressFrontend: React/Typescript*

För att bli godkänd på den här uppgiften MÅSTE ni använda GIT och GitHub. Inlämningen sker som vanligt via It ́s Learning där lämnar in er projektmapp som en zip-fil. I projektmappen ska det finnas (utöver all kod) en README.md fil som innehåller en titel, beskrivning av uppgiften, vilka krav som uppfyllts, vad som krävs för att bygga och starta projektet samt en länk till GitHub repot. ”node_modules”-mappen skall tas bort innan inlämning! Notera att om instruktioner för hur projektet byggs och startas inte finns eller om instruktionerna är felaktiga kommer uppgiften bli underkänd.Läs noga igenom hela uppgiftsbeskrivningen tillsammans innan ni börjar. 1*

`Krav för godkänt:`
1. Uppgiften lämnas in i tid.
2. Produkter ska listas på en sida.
3. Produkter som visas och köps skall hämtas ifrån Stripe.
4. Det ska gå att lägga till produkter i en kundvagn.
5. Baserad på kundvagnen skall det gå att lägga en order genom Stripe.
6. Man skall kunna registrera sig som en användare i webbshoppen. Detta skall resultera i att en ”Customer” skapas i Stripe och användaren sparar i en JSON-fil. (samtliga lösenord skall sparas hashade).
7. Man skall kunna logga in som kund. Den inloggade kunden (som även är sparad i Stripe) skall användas vid placering av order.
8. Man skall inte kunna placera en order om man inte är inloggad.

`Krav för väl godkänt:`
1. Alla punkter för godkänt är uppfyllda
2. Det skall gå att ange en rabattkod för att få rabatt på sitt köp (Detta görs genom Stripe)
3. Man skall som inloggad kunna se sina lagda ordrar.
4. Samtliga placerade ordrar skall sparas till en lista i en JSON-fil.
5. Ordern får inte under några omständigheter läggas utan genomförd betalning! (dvs. Spara aldrig ett orderobjekt såvida ni inte fått bekräftelse tillbaka ifrån stripe att betalningen gått igenom)