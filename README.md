# TITLE: CHECKOUT SESSION
Betaltjänst med integration emot Stripe

*Uppgiftsbeskrivning: I den här inlämningen skall ni skapa en webbshop där det går att lägga en order och genomföra en betalning med integration med Stripe. Man skall kunna registrera sig och logga in. Användaren skall skapas som kund i Stripe samt att användarnamn/email och krypterat lösenord skall sparas i en JSON-fil på servern. Hantera inloggning med hjälp av cookies. Alla produkter hanteras genom Stripe.*

*För väl godkänt finns det en implementerad validering av betalningen (denna kollar efter sessionId). Vid godkänd validering sparas ordern i en JSON-fil på servern. För backend har vi användt: Node/Express och för Frontend: React/Typescript*

Länk till projektet på Github: https://github.com/heinanX/checkoutSession-stripe.git

`Krav för godkänt:` //: Alla uppfyllda!
- 1. Uppgiften lämnas in i tid
- 2. Produkter ska listas på en sida.
- 3. Produkter som visas och köps skall hämtas ifrån Stripe.
- 4. Det ska gå att lägga till produkter i en kundvagn.
- 5. Baserad på kundvagnen skall det gå att lägga en order genom Stripe.
- 6. Man skall kunna registrera sig som en användare i
    webbshoppen. Detta skall 
    resultera i att en ”Customer” skapas i Stripe och användaren sparar i en JSON-fil. (samtliga lösenord skall sparas hashade).
- 7. Man skall kunna logga in som kund. Den inloggade kunden
    (som även är sparad i Stripe) skall användas vid placering av order.
- 8. Man skall inte kunna placera en order om man inte är inloggad.

`Krav för väl godkänt:` //: Alla uppfyllda!
- 1. Alla punkter för godkänt är uppfyllda
- 2. Det skall gå att ange en rabattkod för att få rabatt på sitt köp (Detta görs genom Stripe)
- 3. Man skall som inloggad kunna se sina lagda ordrar.
- 4. Samtliga placerade ordrar skall sparas till en lista i en JSON-fil.
- 5. Ordern får inte under några omständigheter läggas utan genomförd betalning! (dvs. Spara aldrig ett orderobjekt såvida ni inte fått bekräftelse tillbaka ifrån stripe att betalningen gått igenom)

//----------------------- Set up -----------------------//
## Instruktioner för installation och körning

Följ dessa steg för att hämta och köra projektet lokalt på din dator:

### Förutsättningar

Innan du börjar måste du se till att följande är installerat på din dator:

- [Node.js](https://nodejs.org/)
- En webbläsare 

### Steg 1: Klona projektet

Öppna en terminal och navigera till en mapp där du vill placera projektet. Kör sedan följande kommando för att klona projektet från GitHub:

git clone https://github.com/heinanX/checkoutSession-stripe.git


### Steg 2: Installera dependencies

Öppna en terminal (ctrl + J) och navigera in i server-mappen genom att köra:

- cd server

- Kör sedan följande kommando för att installera de nödvändiga dependencies för servern:

- npm install


Öppna en till terminal (ctrl + J) och navigera in i client-mappen genom att köra:

- cd client

- Kör sedan följande kommando för att installera de nödvändiga dependencies för clienten:

- npm install


Detta kommer att installera alla dependencies som behövs för både Express-servern och React-klienten.



### Steg 3: Starta servern och klienten

Använd de två öppna terminalerna och skriv i respektive termenal:

**Terminalfönster 1 (Servern):**

npm run dev

Servern kommer att köras på port 3000 som standard. Om du vill använda en annan port kan du ändra detta i `server.js`-filen.

**Terminalfönster 2 (Klienten):**

npm run dev

Skriv sedan `o` i terminalen så öppnas applikationen i din standardwebbläsare på http://localhost:5173/ (alt. klicka på länken medans du håller ner `ctrl`-knappen)



### Steg 4: Kolla in sidan och lägg en order

Nu när både servern och klienten är igång kan du besöka `COOLSPECS`-hemsida och köpa dig ett par snygga brillor! På sidan kan du skapa en inloggning eller använda en av de som finns i databasen. Har du glömt vad du köpt? Du kan lätt kolla dina ordrar under 'My Account'-fliken. Sidan flexar härligt mellan svenska och engelska och är fortfarande ett WIP när det kommer till funktioner som inte är kopplade till uppgiften. T.ex. vill du tömma din cart får du rensa localhost. Just nu iaf.

Tack å hej! 🚀