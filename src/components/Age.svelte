<script>
    import { PERSONAL_INFO } from "../consts";

    const age = $derived.by(() => {
        const today = new Date();
        const isBeforeBirthday =
            today.getMonth() < PERSONAL_INFO.birthDate.getMonth() ||
            (today.getMonth() === PERSONAL_INFO.birthDate.getMonth() &&
                today.getDate() < PERSONAL_INFO.birthDate.getDate());

        const ageCorrection = isBeforeBirthday ? -1 : 0;

        return (
            today.getFullYear() -
            PERSONAL_INFO.birthDate.getFullYear() +
            ageCorrection
        );
    });
</script>

<span>{age}</span>
