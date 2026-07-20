import { Check, X } from "lucide-react";

const PasswordCriteria = ({ password }) => {
    const criteria = [
        { id: 1, label: "at least 8 characters", met: password.length >= 8 },
        {
            id: 2,
            label: "at least one uppercase letter",
            met: /[A-Z]/.test(password),
        },
        {
            id: 3,
            label: "at least one lowercase letter",
            met: /[a-z]/.test(password),
        },
        { id: 4, label: "at least one number", met: /[0-9]/.test(password) },
        {
            id: 5,
            label: "at least one special character",
            met: /[^A-Za-z0-9]/.test(password),
        },
    ];

    return (
        <div className="mt-3 space-y-1.5">
            {criteria.map((item) => (
                <div key={item.label} className="flex items-center text-xs">
                    {item.met ? (
                        <Check className="size-4 text-green-500 mr-2" />
                    ) : (
                        <X className="size-4 text-gray-500 mr-2" />
                    )}
                    <span
                        className={`transition-colors ${item.met ? "text-green-500" : "text-gray-400"}`}
                    >
                        {item.label}
                    </span>
                </div>
            ))}
        </div>
    );
};

const PasswordStrengthMeter = ({ password }) => {
    const getStrength = () => {
        if (!password) return 0;
        let passedRules = 0;

        if (password.length >= 8) passedRules++;
        if (/[A-Z]/.test(password)) passedRules++;
        if (/[a-z]/.test(password)) passedRules++;
        if (/[0-9]/.test(password)) passedRules++;
        if (/[^A-Za-z0-9]/.test(password)) passedRules++;

        if (passedRules === 5) return 4;
        if (passedRules === 4) return 3;
        if (passedRules === 3) return 2;
        if (passedRules >= 1) return 1;
        return 0;
    };

    const strength = getStrength(password);

    const getColor = (strength) => {
        if (strength === 0) return "bg-red-500";
        if (strength === 1) return "bg-red-400";
        if (strength === 2) return "bg-orange-400";
        if (strength === 3) return "bg-yellow-500";
        if (strength === 4) return "bg-green-500";
    };

    const getStrengthText = (strength) => {
        if (strength === 0) return "Very Weak";
        if (strength === 1) return "Weak";
        if (strength === 2) return "Fair";
        if (strength === 3) return "Good";
        if (strength === 4) return "Strong";
    };

    return (
        <div className="mt-4 mb-4">
            <div className="flex justify-between items-center mb-2 text-sm">
                <span className="text-gray-400">Password strength</span>
                <span className="text-gray-300 font-medium">
                    {getStrengthText(strength)}
                </span>
            </div>

            <div className="flex space-x-1">
                {[...Array(4)].map((_, index) => (
                    <div
                        key={index}
                        className={`h-1.5 w-1/4 rounded-full transition-colors duration-300 ${
                            index < strength
                                ? getColor(strength)
                                : "bg-neutral-800"
                        }`}
                    />
                ))}
            </div>

            <PasswordCriteria password={password} />
        </div>
    );
};

export default PasswordStrengthMeter;
