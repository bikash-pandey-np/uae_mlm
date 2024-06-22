<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

        body {
            font-family: 'Roboto', sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 600px;
            background-color: #ffffff;
            border-radius: 8px;
            margin: 10px auto;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .header {
            background-color: rgb(31, 41, 55); /* Red header background color */
            padding: 20px;
            text-align: center;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            color: #ffffff; /* White text color */
        }

        .logo {
            font-size: 24px;
            font-weight: bold;
            text-decoration: none;
            color: #ffffff; /* White color for logo text */
        }

        .body {
            padding: 5rem;
            text-align: center;
            margin: 1rem;
            font-size: 11pt;
        }
        .body p{
            margin: 12px 1rem;
            color: #333 !important;
        }
        .hello{
            font-style: italic;
        }

        .intro{
            font-size: 12pt;
            text-align: justify;
        }

        .otp {
            background-color: #f0f0f0;
            padding: 10px;
            border-radius: 8px;
            font-size: 20px;
            font-weight: bold;
            display: inline-block;
            margin-top: 10px;
        }

        .footer {
            background-color: #808180; /* Green footer background color */
            padding: 1.3rem;
            text-align: center;
            margin: 2rem 0;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            color: #ffffff; /* White text color */
        }
        .footer p{
            margin: 1rem 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <a href="#" class="logo" style="color: rgb(255, 73, 73);">CAPEX</a>
        </div>

        <div class="body">
            <p class="hello">Hello {{ $data['name'] }},</p>
            <p class="">We're thrilled to welcome you to Capex, where financial empowerment meets innovative solutions. Whether you're here to invest, trade, or explore new opportunities, our platform is designed to support your journey with robust tools and expert insights. Get ready to discover new possibilities and achieve your financial goals with us. Welcome aboard!

            </p>
            <p>Your OTP for verification is:</p>
            <div class="otp">{{ $data['otp'] }}</div>
        </div>

        <div class="footer">
            <p>With regards,</p>
            <p>Team CAPEX</p>
        </div>
    </div>
</body>
</html>
