import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {PageComponent} from './components/shared/page/page.component';
import {NavbarComponent} from './components/shared/page/navbar/navbar.component';
import {SidebarComponent} from './components/shared/page/sidebar/sidebar.component';
import {BlocksComponent} from './components/blocks/blocks.component';
import {BlockComponent} from './components/block/block.component';
import {TransactionsComponent} from './components/transactions/transactions.component';
import {TransactionComponent} from './components/transaction/transaction.component';
import {AccountsComponent} from './components/accounts/accounts.component';
import {AccountComponent} from './components/account/account.component';
import {ProducersComponent} from './components/producers/producers.component';
import {ContractsComponent} from './components/contracts/contracts.component';
import {ContractComponent} from './components/contract/contract.component';
import {WalletComponent} from './components/wallet/wallet.component';
import { SearchComponent } from './components/search/search.component';
import {BlockService} from './services/block.service';
import {TransactionService} from './services/transaction.service';
import {DashboardService} from './services/dashboard.service';
import {FormsModule} from '@angular/forms';
import {AccountService} from './services/account.service';
import {ProducerService} from './services/producer.service';
import { LoadingComponent } from './components/shared/page/loading/loading.component';
import {HttpClientModule} from '@angular/common/http';
import {PrettyJsonModule, SafeJsonPipe} from 'angular2-prettyjson';
import {JsonPipe} from '@angular/common';

const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'blocks', component: BlocksComponent},
  {path: 'blocks/:id', component: BlockComponent},
  {path: 'transactions', component: TransactionsComponent},
  {path: 'transactions/:id', component: TransactionComponent},
  {path: 'accounts', component: AccountsComponent},
  {path: 'accounts/:id', component: AccountComponent},
  {path: 'contracts', component: ContractsComponent},
  {path: 'contracts/:index/:id', component: ContractComponent},
  {path: 'search', component: SearchComponent},
  {path: 'producers', component: ProducersComponent},
  {path: 'wallet', component: WalletComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageComponent,
    NavbarComponent,
    SidebarComponent,
    BlocksComponent,
    BlockComponent,
    TransactionsComponent,
    TransactionComponent,
    AccountsComponent,
    AccountComponent,
    ProducersComponent,
    ContractsComponent,
    ContractComponent,
    WalletComponent,
    SearchComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PrettyJsonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    BlockService,
    TransactionService,
    DashboardService,
    AccountService,
    ProducerService,
    { provide: JsonPipe, useClass: SafeJsonPipe }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
