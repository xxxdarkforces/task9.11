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


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomIntNumber() === 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
        this.person.firstName = this.randomFirstName();
        this.person.surnameName = this.randomSurname();
        return this.person;
    }
};
