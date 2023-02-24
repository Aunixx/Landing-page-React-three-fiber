FROM 168237867270.dkr.ecr.us-east-1.amazonaws.com/node-16:latest
WORKDIR "/nitroleague-website"
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]