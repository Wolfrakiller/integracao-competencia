export const getAllBosses = async () => {
    try {
        const response = await fetch('http://localhost:3000/Bosses');
        return response.json();
    } catch (error) {
        alert('Error >>>', error);

    }


};