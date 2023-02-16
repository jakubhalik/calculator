<h1><a href="https://jakubhalik.github.io/">Kalkulačka zde</a></h1>
<h2><a href="https://wirehaired-slouch-b33.notion.site/Kalkula-ka-Dokumentace-aa7d48d8163e47a098fa085a8db20916">Dokumentace zde</a></h2>
Celá kalkulačka je v komponentu **`Calculator`**. Všechny komponenty, proměnné, funkce jsou pojmenovány anglicky, protože mi osobně do programování mnohem více sedí pojmenovávat vše anglicky, když je již programování samotné tak anglickým prostředím.

K programování této webové aplikace byl použit  **`React`** s  **`Typescript`** a  **`SCSS`**.

Dosti je použita **`state`**(stavová) proměnná **`useState`** pro uchování aktuálního vstupu, výsledku výpočtu, posledního stisknutého tlačítka a předchozího výpočtu. Každá ze **`state`** proměnných je deklarována jako pole se dvěma hodnotami: první hodnotou je aktuální hodnota **`state`** proměnné a druhá hodnota je funkce pro aktualizaci hodnoty **`state`** proměnné.

### Funkce **`Calculator`**

Funkce **`Calculator`** je funkční komponenta, která implementuje jednoduchou kalkulačku. Umožňuje uživateli provádět základní aritmetické operace (sčítání, odčítání, násobení a dělení).

### **State proměnné**

Funkce **`Calculator`** používá několik **`state`** proměnných pro sledování aktuálního vstupu, výsledku a předchozích výpočtů:

- **`input`**: řetězec, který ukládá aktuální vstupní výraz. Je inicializován na prázdný řetězec(pro "string" v této dokumentaci používám české slovo řetězec).
- **`result`**: řetězec, který ukládá výsledek aktuálního vstupního výrazu. Je také inicializován na prázdný řetězec.
- **`lastInput`**: řetězec, který ukládá poslední akci vstupu provedenou uživatelem (např. kliknutí na tlačítko nebo stisknutí klávesy). Je také inicializován na prázdný řetězec.
- **`previousCalculation`**: řetězec, který ukládá předchozí výpočet provedený uživatelem. Je také inicializován na prázdný řetězec.

### **Obslužné funkce událostí**

Funkce **`Calculator`** definuje několik obslužných funkcí událostí pro zpracování vstupu uživatele:

- **`keyPress`**: obslužná funkce události, která se volá, když je stisknuta klávesa v poli vstupu. Zkontroluje hodnotu stisknuté klávesy a podle toho aktualizuje **`state`** proměnné **`input`** a **`result`**. Pokud je stisknut matematický operátor (**`+`**, **`-`**, **`*`**, nebo **`/`**), je přidán do řetězce.
- Pokud je stisknuta číslice (**`0-9`**), závorka (**`(`**, **`)`**) nebo desetinná tečka (**`.`**), také se přidá do řetězce **`input`**. Pokud je stisknuta klávesa "**`Backspace`**", z řetězce **`input`** se odstraní poslední znak. Pokud je stisknuta klávesa "**`Enter`**", volá se funkce **`displayResult`** pro výpočet a zobrazení výsledku aktuálního vstupního výrazu.
- **`handleButtonPress`**: obslužná funkce události, která se volá, když je kliknuto na tlačítko. Získá hodnotu kliknutého tlačítka a podle toho aktualizuje **`state`** proměnné **`input`** a **`result`**. Pokud je kliknuto na matematický operátor (**`+`**, **`-`**, **`*`**, nebo **`/`**), přidá se do řetězce **`input`**. Pokud je kliknuto na číslici (**`0-9`**), závorka (**`(`**, **`)`**) nebo desetinnou tečku (**`.`**), také se přidá do řetězce **`input`**. Pokud je kliknuto na tlačítko "**`CE`**"(Clear entry), volá se funkce **`reset`** pro resetování **`state`** proměnných **`input`** a **`result`** na jejich počáteční hodnoty. Pokud je kliknuto na tlačítko "**`=`**", volá se funkce **`displayResult`** pro výpočet a zobrazení výsledku aktuálního vstupního výrazu.
- Jak v **`keyPress`** tak v **`handleButtonPress`** je velké množství podmínek, které znemožňují zadat do kalkulačky matematické nesmysly jako např. operátor dvakrát za sebou, desetinnou tečku víckrát než jednou ve stejném čísle, operátory krom "-" a konec závorky jako první hodnotu v inputu, čísla a symboly závorky po čísle 0 je-li číslo 0 první hodnotou v inputu, konec závorky hned po začátku závorky, operátory krom "-" po začátku závorky, konec závorky po operátorech, desetinná tečka po a před operátory, nebo závorkami. **Unit Testy** v App.test.tsx všechny tyto podmínky důkladně testují.

### **Pomocné funkce**

Funkce **`Calculator`** definuje několik pomocných funkcí pro vykonávání konkrétních úkolů:

- **`reset`**: funkce, která se volá, když je kliknuto na tlačítko "**`CE`**". Resetuje **`state`** proměnné **`input`** a **`result`** na jejich počáteční hodnoty.
- **`displayResult`**: funkce, která se volá, když je kliknuto na tlačítko "**`=`**". Vypočítá výsledek aktuálního vstupního výrazu pomocí funkce **`eval`** a aktualizuje **`state`** proměnnou **`result`** s výsledkem. Také aktualizuje **`state`** proměnnou **`previousCalculation`** s aktuálním vstupním výrazem.

### **JSX prvky**

Funkce **`Calculator`** vrací JSX prvek, který představuje uživatelské rozhraní kalkulačky. Tento prvek obsahuje tlačítka pro různé operace kalkulačky a pole vstupu pro zobrazení aktuálního vstupu a výsledku.

### Unit testy

V rámci kalkulačky jsem napsal i několik unit testů, které ověřují správné fungování jednotlivých funkcí kalkulačky. Například testy pro ověření, že je možné zadat více teček v jednom čísle, pokud je stejný počet operátorů vstupu, nebo že není možné kliknout na tlačítko + přímo po znacích (,.,+,-,/,* atd. Tyto testy slouží k zajištění správného chování kalkulačky a k ochraně před chybami v kódu.

### Vizualita

Vizualita kalkulačky je navržena s důrazem na přehlednost a jednoduchost. Vzhled aplikace je založen na použití barevného schématu s odstíny oranžové, žluté, bílé a šedé. Oranžová barva je použita jako hlavní barva vzhledu, je použita na pozadí výsledku a se žlutou je použita na tlačítka. Kombinace bílé a šedé je použita jako vedlejší zbarvení, víc do bíla se stíny šedé je použita na tlačítkách a víc šedě je použita na pozadí samotné kalkulačky.
Tlačítka jsou navržena tak, aby byla snadno rozeznatelná a přístupná. Při najetí myší na tlačítko se změní jeho barva a vzhled, což umožňuje uživateli snadno zjistit, na které tlačítko právě kliká. Kromě toho jsou tlačítka zvýrazněna při stisknutí, aby bylo jasné, že byla zmáčknuta. Výsledek je zobrazen v samostatném výstupním poli nad klávesnicí kalkulačky, které je o něco větší než ostatní tlačítka a je také snadné ho přečíst. Cílem bylo, aby byla vizualita kalkulačky příjemná pro oči a aby bylo snadné s ní pracovat.

### Závěr

Komponent **`Calculator`** je vysoce přizpůsobitelný a lze jej snadno rozšířit o nové funkce a tlačítka, pokud je to požadováno. Například lze přidat tlačítka pro výpočet složitějších matematických funkcí, jako je odmocnina nebo faktoriál. Komponent také obsahuje robustní kontrolu vstupu, která zajišťuje, že vstup je platný matematický výraz a zabraňuje zadávání neplatných vstupů, jako jsou například dvě operace za sebou nebo desetinná tečka za operátorem.

V závěru lze říci, že jsem se pokusil naprogramovat komponent **`Calculator`** jako efektivní a flexibilní nástroj pro výpočet základních matematických výrazů a navrhl jej tak, aby byl snadno rozšířitelný o nové funkce a tlačítka. Bylo mým úmyslem a snahou napsat jej s robustní kontrolou vstupu a přizpůsobitelností, které z něj budou činit dobrou volbu pro implementaci kalkulačky do aplikací nebo webových stránek.
