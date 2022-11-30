const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ирина",
            "id_2": "Светлана",
            "id_3": "Алиса",
            "id_4": "Екатерина",
            "id_5": "Виктория",
            "id_6": "Наталья",
            "id_7": "Елена",
            "id_8": "Надежда",
            "id_9": "Ефросинья",
            "id_10": "Татьяна"
        }
    }`,

    proffMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Слесарь",
            "id_2": "Сварищик",
            "id_3": "Программист",
            "id_4": "Тестировщик",
            "id_5": "Солдат",
            "id_6": "Директор",
            "id_7": "Бухгалтер",
            "id_8": "Водитель",
            "id_9": "Стропальщик",
            "id_10": "Безработный"
        }
    }`,

    proffFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Повар",
            "id_2": "Кондитер",
            "id_3": "Программист",
            "id_4": "Няня",
            "id_5": "Уборщица",
            "id_6": "Директор",
            "id_7": "Бухгалтер",
            "id_8": "Продавец",
            "id_9": "Флорист",
            "id_10": "Домохозяйка"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function () {
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else if (this.person.gender == this.GENDER_FEMALE) {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomSurname: function () {
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.surnameJson);
        } else if (this.person.gender == this.GENDER_FEMALE) {
            return this.randomValue(this.surnameJson) + 'a';
        }
    },

    randomPatronymic: function () {
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson) + 'ович';
        } else if (this.person.gender == this.GENDER_FEMALE) {
            return this.randomValue(this.firstNameMaleJson) + 'овна';
        }
    },
    
    randomProff: function () {
        if (this.person.gender == this.GENDER_MALE) {
            return "Профессия: " + this.randomValue(this.proffMaleJson);
        } else if (this.person.gender == this.GENDER_FEMALE) {
            return "Профессия: " + this.randomValue(this.proffFemaleJson);
        }
    },

    randomFoto: function () {
        if (this.person.gender == this.GENDER_MALE) {
            return '<img src="m.png">';
        } else if (this.person.gender == this.GENDER_FEMALE) {
            return '<img src="f.png">';
        }
    },

    randomBirthYear: function () {
            function daysInMonth (year, month) {
                return new Date(year, month, 0).getDate();
            }
            month = this.randomIntNumber(12 , 1);
            const monthNames = [          
                "Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
                "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
            ];
            monthName = monthNames[month-1];
            year = this.randomIntNumber(1962 , 2005);
            maxday = daysInMonth(year, month);
            day = this.randomIntNumber(maxday , 1);
            birthday = new Date(year, month, day);
            let options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                timezone: 'UTC +3',
              };
            return "Дата рождения: " + birthday.toLocaleString("ru", options);
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomIntNumber() === 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
        this.person.firstName = this.randomFirstName();
        this.person.surnameName = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
        this.person.birthYear = this.randomBirthYear();
        this.person.foto = this.randomFoto();
        this.person.proff = this.randomProff();
        return this.person;
    }, 
};