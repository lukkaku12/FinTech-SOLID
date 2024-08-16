import { Injectable } from "@nestjs/common";
import { User } from "src/user/entities/user.entity";
import { Microcredit } from "./entities/microcredit.entity";

interface InterestRateStrategy {
  calculate(user: User): number;
}

@Injectable()
export class StandardInterestRateStrategy implements InterestRateStrategy {
  calculate(user: User): number {
    return user.creditScore > 700 ? 5 : 15;
  }
}

@Injectable()
export class PremiumInterestRateStrategy implements InterestRateStrategy {
  calculate(user: User): number {
    return user.creditScore > 700 ? 3 : 10;
  }
}

@Injectable()
export class CreditCalculationService {
  private strategy: InterestRateStrategy;

  constructor(strategy: InterestRateStrategy) {
    this.strategy = strategy;
  }

  calculateInterestRate(user: User): number {
    return this.strategy.calculate(user);
  }

}

@Injectable()
export class MicrocreditRegistryService {
  saveMicrocredit(microcredit: Microcredit): void {
    // Lógica para guardar el microcrédito en la base de datos
  }
}



@Injectable()
export class MicrocreditService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly creditCalculationService: CreditCalculationService,
    private readonly microcreditRegistryService: MicrocreditRegistryService
  ) {}

  applyForMicrocredit(userId: string, amount: number): Microcredit {
    const user = this.userRepository.findById(userId);
    const interestRate = this.creditCalculationService.calculateInterestRate(user);
    const microcredit = new Microcredit(userId, amount, interestRate, 'PENDING');
    this.microcreditRegistryService.saveMicrocredit(microcredit);
    return microcredit;
  }
}


